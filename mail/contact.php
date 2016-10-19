<?php

$response = array();
// Check for empty fields
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){

   if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])){

      $response["success"] = false;
      $response["message"] = "Please! enter all fields.";
      echo json_encode($response);
   }else{
      $name = $_POST['name'];
      $email_address = $_POST['email'];
      $message = $_POST['message'];

      $message = "From: ".$email_address."\n\n".$message;
      $to = 'rohnsht@gmail.com';
      $subject = "Website Contact Form: ". $name;
      $headers = 'From: noreply@yourdomail.com' . "\r\n" .
       'Reply-To:'. $email_address;
      $mail = mail($to, $subject, $message, $headers);
      if($mail){
         $response["success"] = true;
         $response["message"] = "Message sent.";
         echo json_encode($response);
      }
   }

}
?>