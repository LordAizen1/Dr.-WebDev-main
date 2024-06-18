<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $feedback = $_POST['suggestion'];

    // Here, you can process the feedback as needed (e.g., save to database, send email)
    // For demonstration, we'll just echo the feedback
    echo "Thank you for your feedback: " . $feedback;
}
?>
