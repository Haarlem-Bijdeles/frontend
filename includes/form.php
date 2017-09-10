<?php

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

//Indien in frontend, roep de function update_newsletter op, zodra post[newsletter] gevuld is
function submit_ajax_form() {

  check_ajax_referer( 'submit-form', 'security' );

  $fullName = $_POST['name'];
  $type = $_POST['formkey'];

  //server validatie
  $requiredFields = array('name', 'email', 'message', 'formkey');
  if (!checkRequiredFields($requiredFields)) die('verzenden mislukt');

  $fields  = array();
  $fields[] = array(
    'label' => 'Naam',
    'value' => $fullName
  );

  $fields[] = array(
    'label' => 'E-mail',
    'value' =>  $_POST['email']
  );

  $fields[] = array(
    'label' => 'Telefoonnumer',
    'value' =>  $_POST['phone']
  );

  $fields[] = array(
    'label' => 'Opmerkingen',
    'value' =>  $_POST['message']
  );

  $fields[] = array(
    'label' => 'Formulier',
    'value' =>  $type
  );

  $subject = 'Reactie via website ' . get_bloginfo('url');

  $message =  'Er is een reactie binnengekomen op <a href="' . get_bloginfo('url') . '">' . get_bloginfo('url') . '</a>.
  <br /><br />
  De volgende gegevens zijn ingevuld:
  <br /><br />
  <table width="100%">';

    foreach ($fields as $field) {
      $message .= '<tr><td width="150">' . $field['label'] . ':</td><td>' . $field['value'] . '</td></tr>';
    }
    $message .= '<tr><td colspan="2">&nbsp;</td></tr>
  </table>';

  if (contact__add($message, $type, $fullName)) {
    contact__send_mail($message, $subject, $type, $fullName);
  }

  die('Hartelijk dank voor uw reactie. Wij nemen zo snel mogelijk contact met u op.');
}