<script>
  export default {
    'name': 'Filters',
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    createElem: function (type, label, name, placeholder, options = [], removeLabel = false) {

      return '<b-form-group label-cols="2"  label="' + label + '"><b-form-input placeholder="' + placeholder + '"></b-form-input></b-form-group>';
      let id = 'id="' + name + '"', className = 'class="form-control"',
        ph = 'placeholder="' + placeholder + '"', elem = '';
      if (!removeLabel) {
        elem = '<label for="' + name + '" class="col-sm-4 col-form-label">' + label + '</label>'
          + '<div class="bv-no-focus-ring col">';
      }

      switch (type) {
        case 'text':
        case 'email':
          elem += '<input ' + id + ' type="' + type + '" ' + ph + ' ' + className + '>';
          break;

        case 'check':
          options.forEach(function (item, index) {
            elem += '<div class="form-check form-check-inline">' +
              '<input type="checkbox" autocomplete="off" class="form-check-input" value="' + index + '" id="option_' + index + '" name="' + name + '[]">' +
              '<label class="form-check-label" for="option_' + index + '"><span>' + item + '</span></label>' +
              '</div>';
          })
          break;

        case 'select':
          elem += '<div class="bv-no-focus-ring"><select id="' + name + '" size="0" ' + className + '><option value="">Select ' + label + '</option>';
          options.forEach(function (item, index) {
            elem += '<option value="' + index + '">' + item + '</option>';
          })
          elem += '</select></div>';
          break;
        case 'textarea':
          elem += '<textarea ' + id + '  ' + ph + ' ' + className + '></textarea>';
          break;
        case 'plaintext':
          elem += '<b>' + placeholder + '</b>';
          break;
        default:
      }
      elem += '</div>';
      return elem;
    },

  }
</script>
