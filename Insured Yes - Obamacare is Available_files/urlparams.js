const query_string = document.location.search;
const url_params = new URLSearchParams(query_string);

const hitid = url_params.has('hitid') ? url_params.get('hitid') : 'Organic';
const pub = url_params.has('pub') ? url_params.get('pub') : '270400';
const c1 = url_params.has('c1') ? url_params.get('c1') : 'Organic';
const oid = url_params.has('oid') ? url_params.get('oid') : 'Organic';

function populate_field(field_id, field_value) {
  if (typeof(document.getElementById(field_id)) != 'undefined' && document.getElementById(field_id) != null) {
    const target = document.getElementById(field_id);
    target.value = field_value;
  }
}