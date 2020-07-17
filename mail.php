<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['userName'];
$contacts = $_POST['userContacts'];
$message = $_POST['userMessage'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.nic.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'form@frontenddeveloper.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '6y7^Y&6y7'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('form@frontenddeveloper.ru'); // от кого будет уходить письмо?
$mail->addAddress('admin@frontenddeveloper.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment($_FILES['userAttachment']['tmp_name'], $_FILES['userAttachment']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заполнена форма заявки на сайте';
$mail->Body    = '' .$name . ' оставил заявку.<br>Контактные данные ' .$contacts. '<br>Оставлено сообщение: ' .$message;
$mail->AltBody = '';

if(!$mail->Send()) {
    echo "Message could not be sent.  ";
    echo "Mailer Error: " . $mail->ErrorInfo;
    exit;
  }
    // header('location: thank-you.html');
    // window.location.href = 'thank-you.html ';
?>