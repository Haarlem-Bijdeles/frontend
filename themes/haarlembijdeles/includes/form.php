<?php
function add_form_scripts() {
  wp_localize_script( 'contact', 'formTranslations', translate_form_errors());
}

add_action( 'wp_ajax_submit_ajax_form', 'submit_ajax_form' );
add_action( 'wp_ajax_nopriv_submit_ajax_form', 'submit_ajax_form' );

function checkRequiredFields($fields) {
  $verified = TRUE;
  foreach($fields as $field) {
    if(!isset($_POST[$field]) || empty($_POST[$field])) {
      $verified = FALSE;
    }
  }
  return $verified;
}

function getLabel($field) {
  $label = array(
    'url'             => 'Pagina',
    'email'           => 'E-mailadres',
    'name'            => 'Naam',
    'address'         => 'Adres',
    'phone'           => 'Telefoonnumer',
    'message'         => 'Bericht',
    'remarks'         => 'Opmerkingen',
    'city'            => 'Plaats',
    'country'         => 'Land',
    'zipcode'         => 'Postcode',
    'room'            => 'Aantal kamers',
    'adults'          => 'Aantal volwassenen',
    'kids'            => 'Aantal kinderen',
    'date-arrival'    => 'Aankomstdatum',
    'date-departure'  => 'Vertrekdatum',
    'remarks'         => 'Opmerkingen',
  );
  return $label[$field];
}

//Indien in frontend, roep de function update_newsletter op, zodra post[newsletter] gevuld is
function submit_ajax_form() {

  check_ajax_referer( 'submit-form', 'security' );

  $fullName = $_POST['name'];
  $type = $_POST['formkey'];

  //server validatie
  $formFields = array();
  $requiredFields = array();

  switch ($type) {
    case 'contact' :
      $formFields = array('name', 'email', 'phone', 'message');
      $requiredFields = array('name', 'email', 'message');
    break;
  }

  if (empty($formFields)) wp_send_json_error('Verzenden mislukt');
  if (!checkRequiredFields($requiredFields)) wp_send_json_error('Niet alle verplichte velden zijn ingevuld.');

  $formData = array();
  foreach ($formFields as $field) {
    $formData[getLabel($field)] = $_POST[$field];
  }

  $subject = 'Reactie via website ' . get_bloginfo('url');

  $message =  'Er is een reactie binnengekomen op <a href="' . get_bloginfo('url') . '">' . get_bloginfo('url') . '</a>.
  <br /><br />
  De volgende gegevens zijn ingevuld:
  <br /><br />
  <table width="100%">';

  foreach ($formData as $label => $value) {
      $message .= '<tr><td width="150">' . $label . ':</td><td>' . $value . '</td></tr>';
    }
    $message .= '<tr><td colspan="2">&nbsp;</td></tr>
  </table>';

  if (contact__add($message, $type, $fullName)) {
    contact__send_mail($message, $subject, $type, $fullName);
  }

  wp_send_json_success('Hartelijk dank voor uw reactie. Wij nemen zo snel mogelijk contact met u op.');
}