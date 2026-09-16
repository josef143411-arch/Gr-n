<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Only POST requests are allowed."]);
    exit;
}

// Destination email address
$to = "info@hgaadvokat.se";

// Retrieve submission type
$type = isset($_POST['type']) ? $_POST['type'] : '';

// Helper function to clean inputs
function sanitize($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

$subject_prefix = "[Hemsida] ";

if ($type === 'contact') {
    $name = sanitize($_POST['name'] ?? '');
    $email = sanitize($_POST['email'] ?? '');
    $phone = sanitize($_POST['phone'] ?? '');
    $category = sanitize($_POST['category'] ?? '');
    $message = sanitize($_POST['message'] ?? '');

    if (!$name || !$email || !$message) {
        echo json_encode(["success" => false, "message" => "Vänligen fyll i alla obligatoriska fält."]);
        exit;
    }

    $subject = $subject_prefix . "Kontaktförfrågan: " . $category;
    $body = "<h2>Ny kontaktförfrågan från hemsidan</h2>";
    $body .= "<p><strong>Namn:</strong> $name</p>";
    $body .= "<p><strong>E-post:</strong> $email</p>";
    $body .= "<p><strong>Telefon:</strong> $phone</p>";
    $body .= "<p><strong>Rättsområde/Ärende:</strong> $category</p>";
    $body .= "<p><strong>Meddelande:</strong><br />" . nl2br($message) . "</p>";

} elseif ($type === 'booking') {
    $name = sanitize($_POST['name'] ?? '');
    $email = sanitize($_POST['email'] ?? '');
    $phone = sanitize($_POST['phone'] ?? '');
    $area = sanitize($_POST['area'] ?? '');
    $advisor = sanitize($_POST['advisor'] ?? '');
    $date = sanitize($_POST['date'] ?? '');
    $time = sanitize($_POST['time'] ?? '');
    $description = sanitize($_POST['description'] ?? '');
    $ref = sanitize($_POST['ref'] ?? '');

    if (!$name || !$email || !$phone || !$date || !$time) {
        echo json_encode(["success" => false, "message" => "Vänligen fyll i alla obligatoriska fält."]);
        exit;
    }

    $subject = $subject_prefix . "Bokningsförfrågan - Ref: " . $ref;
    $body = "<h2>Ny mötesbokning från hemsidan</h2>";
    $body .= "<p><strong>Referens:</strong> $ref</p>";
    $body .= "<p><strong>Namn:</strong> $name</p>";
    $body .= "<p><strong>E-post:</strong> $email</p>";
    $body .= "<p><strong>Telefon:</strong> $phone</p>";
    $body .= "<p><strong>Rättsområde:</strong> $area</p>";
    $body .= "<p><strong>Önskad handläggare:</strong> $advisor</p>";
    $body .= "<p><strong>Datum & Tid:</strong> $date kl. $time</p>";
    $body .= "<p><strong>Ärendebeskrivning:</strong><br />" . nl2br($description) . "</p>";

} elseif ($type === 'careers') {
    $name = sanitize($_POST['name'] ?? '');
    $email = sanitize($_POST['email'] ?? '');
    $phone = sanitize($_POST['phone'] ?? '');
    $role = sanitize($_POST['role'] ?? '');
    $coverLetter = sanitize($_POST['coverLetter'] ?? '');

    if (!$name || !$email || !$role || !$coverLetter) {
        echo json_encode(["success" => false, "message" => "Vänligen fyll i alla obligatoriska fält."]);
        exit;
    }

    $subject = $subject_prefix . "Spontanansökan: " . $role;
    $body = "<h2>Ny spontanansökan från hemsidan</h2>";
    $body .= "<p><strong>Namn:</strong> $name</p>";
    $body .= "<p><strong>E-post:</strong> $email</p>";
    $body .= "<p><strong>Telefon:</strong> $phone</p>";
    $body .= "<p><strong>Sökt roll:</strong> $role</p>";
    $body .= "<p><strong>Presentation & Personligt brev:</strong><br />" . nl2br($coverLetter) . "</p>";

} else {
    // Check if JSON request instead of multipart form-data
    $input = json_decode(file_get_contents('php://input'), true);
    if ($input) {
        $type = $input['type'] ?? '';
        if ($type === 'contact') {
            $name = sanitize($input['name'] ?? '');
            $email = sanitize($input['email'] ?? '');
            $phone = sanitize($input['phone'] ?? '');
            $category = sanitize($input['category'] ?? '');
            $message = sanitize($input['message'] ?? '');

            if ($name && $email && $message) {
                $subject = $subject_prefix . "Kontaktförfrågan: " . $category;
                $body = "<h2>Ny kontaktförfrågan från hemsidan</h2>";
                $body .= "<p><strong>Namn:</strong> $name</p>";
                $body .= "<p><strong>E-post:</strong> $email</p>";
                $body .= "<p><strong>Telefon:</strong> $phone</p>";
                $body .= "<p><strong>Rättsområde/Ärende:</strong> $category</p>";
                $body .= "<p><strong>Meddelande:</strong><br />" . nl2br($message) . "</p>";
            }
        } elseif ($type === 'booking') {
            $name = sanitize($input['name'] ?? '');
            $email = sanitize($input['email'] ?? '');
            $phone = sanitize($input['phone'] ?? '');
            $area = sanitize($input['area'] ?? '');
            $advisor = sanitize($input['advisor'] ?? '');
            $date = sanitize($input['date'] ?? '');
            $time = sanitize($input['time'] ?? '');
            $description = sanitize($input['description'] ?? '');
            $ref = sanitize($input['ref'] ?? '');

            if ($name && $email && $phone && $date && $time) {
                $subject = $subject_prefix . "Bokningsförfrågan - Ref: " . $ref;
                $body = "<h2>Ny mötesbokning från hemsidan</h2>";
                $body .= "<p><strong>Referens:</strong> $ref</p>";
                $body .= "<p><strong>Namn:</strong> $name</p>";
                $body .= "<p><strong>E-post:</strong> $email</p>";
                $body .= "<p><strong>Telefon:</strong> $phone</p>";
                $body .= "<p><strong>Rättsområde:</strong> $area</p>";
                $body .= "<p><strong>Önskad handläggare:</strong> $advisor</p>";
                $body .= "<p><strong>Datum & Tid:</strong> $date kl. $time</p>";
                $body .= "<p><strong>Ärendebeskrivning:</strong><br />" . nl2br($description) . "</p>";
            }
        }
    }
}

if (!isset($body)) {
    echo json_encode(["success" => false, "message" => "Felaktigt förfrågningsformat."]);
    exit;
}

// Check for uploaded files (CV)
$has_file = ($type === 'careers' && isset($_FILES['resume']) && $_FILES['resume']['error'] == UPLOAD_ERR_OK);

if ($has_file) {
    $file_path = $_FILES['resume']['tmp_name'];
    $file_name = $_FILES['resume']['name'];
    $file_size = $_FILES['resume']['size'];
    $file_type = $_FILES['resume']['type'];

    // Read and encode file content for standard mail attachment
    $handle = fopen($file_path, "r");
    $content = fread($handle, $file_size);
    fclose($handle);
    $encoded_content = chunk_split(base64_encode($content));

    $boundary = md5(time());

    // Mail Headers with attachment support
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: Grönvall & Partners Webb <noreply@hgaadvokat.se>\r\n";
    $headers .= "Reply-To: " . ($email ?? $to) . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n";

    // Email Body
    $email_message = "--" . $boundary . "\r\n";
    $email_message .= "Content-Type: text/html; charset=UTF-8\r\n";
    $email_message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $email_message .= $body . "\r\n\r\n";

    // File Attachment Part
    $email_message .= "--" . $boundary . "\r\n";
    $email_message .= "Content-Type: " . $file_type . "; name=\"" . $file_name . "\"\r\n";
    $email_message .= "Content-Disposition: attachment; filename=\"" . $file_name . "\"\r\n";
    $email_message .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $email_message .= $encoded_content . "\r\n\r\n";
    $email_message .= "--" . $boundary . "--";

    $sent = mail($to, $subject, $email_message, $headers);
} else {
    // Standard HTML email without attachments
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Grönvall & Partners Webb <noreply@hgaadvokat.se>\r\n";
    $headers .= "Reply-To: " . ($email ?? $to) . "\r\n";

    $sent = mail($to, $subject, $body, $headers);
}

if ($sent) {
    echo json_encode(["success" => true, "message" => "E-post skickad framgångsrikt."]);
} else {
    echo json_encode(["success" => false, "message" => "Kunde inte skicka e-post från servern."]);
}
?>
