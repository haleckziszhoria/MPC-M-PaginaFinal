<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
</head>
<body>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>";
    <script>
        function sweetalertclick(){
            swal({
                title: "El mensaje se envió CORRECTAMENTE!",
                icon: "success",
                button:"OK",
            });
        }
    </script>
</body>
</html>
<?php
    $destino = "amcsoria@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    
    $contenido = "Nombre: " . $nombre . "\nCorreo: ". $correo . "\nTeléfono: ". $telefono . "\nMensaje: ".$mensaje;

    //ini_set()
    $success = mail($destino,"Contacto - Pagina Web MPC",$contenido);
    if(!$success){
        $errorMessage = error_get_last()['message'];
        
    }
    else{
        
        echo "<script>sweetalertclick()</script>";
        echo "<script>setTimeout(\"location.href='../index.php'\",3000)</script>";
        /*
        echo "<script>alert('El mensaje se envió CORRECTAMENTE')</script>";
        echo "<script>setTimeout(\"location.href='../index.php'\",1000)</script>";
        */
    }
        
 
?>

