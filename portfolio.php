<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?php echo $_GET['target']; ?></title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

</head>
<body>

<?php
	require 'connect.inc.php';
    $data = array();
	$name = $_GET["target"];

	$query = "SELECT * FROM `portfolio` WHERE `name` = '$name'";
	$query_run = mysqli_query($con, $query);
    while($result = mysqli_fetch_assoc($query_run)){
        //push the values in the array
        $row = array();
        $row['description'] = $result['description'];
        $row['sub_heading'] = $result['sub_heading'];
        $row['image'] = $result['image'];
        array_push($data, $row);
    }
?>

	<div class="scroll-back">
        <a class="btn btn-primary page-scroll" href="/#portfolio">
            <i class="fa fa-arrow-left"></i>
        </a>
    </div>

    <section>
    <div class="container">
    	<div class="row">
    		<div class="col-lg-8 col-lg-offset-2 text-center">
                <h2 class="section-heading"><?php echo $name; ?></h2>
                <h3 class="section-subheading text-muted"><?php echo $data[0]['sub_heading']; ?></h3>
                <p> <?php echo $data[0]['description']; ?></p>
                <br> 
    			<img src="<?php echo $data[0]['image']; ?>" class="img-responsive" />
                <br>
    			<img src="<?php echo $data[1]['image']; ?>" class="img-responsive"/>
                <br>
                <img src="<?php echo $data[2]['image']; ?>" class="img-responsive"/>
    		</div>
    	</div>
    </div>
    </section>
</body>
</html>
