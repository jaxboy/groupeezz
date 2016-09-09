<?php

// define variables and set to empty values
$nameError = $emailError = "";
$name = $email = "";
$errorMSG = "";


// NAME
if (empty($_POST["name"])) {
    $errorMSG= "Your name cannnot be left blank.\n";
} else {
    $name = $_POST["name"];
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $errorMSG = "Please enter valid characters.";
       
    }
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Your email address is required.\n";
} else {
    $email = $_POST["email"];
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errorMSG = "Please enter a valid email address.";
    }
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Your message cannot be blank.";
} else {
    $message = $_POST["message"];

}

$EmailTo = "hello@thegroupeezz.com";
$Subject = "New Message Received from $name";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Thank you for contacting Groupeezz! We will be with you shortly.";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>
