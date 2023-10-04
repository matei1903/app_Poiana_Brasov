<?php
session_start();

$db['host'] = "localhost"; // Host name
$db['user'] = "root"; // Mysql username
$db['pass'] = ""; // Mysql password
$db['name'] = "apl_po_bv"; // Database name


        // $username = $_POST['name'];
        // $email = $_POST['email'];
        // $password = $_POST['pass'];
        // $phone = $_POST['phone'];
        $errors = array(); 
// Create connection
$conn = mysqli_connect($db['host'], $db['user'], $db['pass'], $db['name']);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo '<script type="text/javascript">
       window.onload = function () { alert("Inregistrare reusita"); } 
</script>';
}

// Process form submission
if (isset($_POST['send'])) {

    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $pass = htmlspecialchars($_POST['pass']);
    $hash = password_hash($pass, PASSWORD_BCRYPT);

    // Prepare the SQL statement
    $stmt = mysqli_prepare($conn, "INSERT INTO user (name, phone, email, pass) VALUES (?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt, 'ssss', $name, $phone, $email, $hash);

    // Execute the statement
    if (mysqli_stmt_execute($stmt)) {
        header("Location: register.php");
    } else {
        echo "Error: " . mysqli_stmt_error($stmt);
    }

    // Close the statement
    mysqli_stmt_close($stmt);
}

// Close MySQL connection
mysqli_close($conn);

?>

