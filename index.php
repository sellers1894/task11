<?php
function random_html_color()
{
    return sprintf( '#%02X%02X%02X', rand(100, 255), rand(0, 255), rand(0, 255) );
}

// echo random_html_color();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Task1</title>
	<link rel="stylesheet" type="text/css" href="css.css">
	<script type="text/javascript" src="substance.js"></script>
	<!-- <script type="text/javascript" src="element.js"></script> -->
	<script type="text/javascript" src="element.js"></script>
</head>
<body>
	<header><H2>Химик</H2></header>
	<aside>
		<div class="dropel" id="resurse" ondrop="dropImg(event)" ondragover="makeDroppable(event)">

			<?php
				if (($handle = fopen("atom.csv", "r")) !== FALSE) {
					while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
						echo "<div draggable=\"true\" ondragstart=\"dragImg(event)\" class=\"dragg-elem\" id=\"".$data[0]."\" style=\"background-color: ".$data[2].";\">";
						echo "<span class=\"elem-name\">".$data[0]."</span>";
						echo "<span class=\"elem-count\">(".$data[1].")</span>";
						echo "</div>";
					}
					fclose($handle);
				}
			?>

		</div>
		<div id="info">
		</div>
		<div id="about">
			<p><b>Правила:</b></p>
			<p>При создании добавляется 3 единицы</p>
			<p>При создании существуещего, так же добавляется 3 единицы</p>
			<p>При клике выводтся возможные формулы</p>
		</div>
	</aside>
	<main>

		<div class="dropel" id="create" ondrop="dropImg(event)" ondragover="makeDroppable(event)"></div>

		<button onclick="create()">Соединить</button>

	</main>
	<div class="clear"></div>
	<script type="text/javascript" src="js.js"></script>
</body>
</html>




<?php
// if (isset($_GET["new"])){
// 	$arr[] = str_replace("|","",str_replace(")","",str_replace("(","",$_GET["new"])));
// 	$arr[] = 3;
// 	$b = false;
// 	if (($handle = fopen("atom.csv", "r")) !== FALSE) {
// 		$i = 0;
// 		while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
// 			$array[$i][] = $data[0];
// 			$array[$i][] = $data[1];
// 			if (!strnatcasecmp($array[$i][0], $arr[0]){
// 				$array[$i][1] += $arr[1];
// 				$b = true;
// 			}
// 		}
// 		fclose($handle);
// 	}

// 	if (!$b)
// 		$array[] = $arr;

// 	$fp = fopen('atom.csv', 'w');
// 	foreach ($array as $fields) {
// 	    fputcsv($fp, $fields);
// 	}
// 	fclose($fp);

// }
// else{
// 	if (($handle = fopen("elements.csv", "r")) !== FALSE) {
// 		while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
// 			foreach ($data as $key => $value) {
// 				$formula .= $value."|";
// 			}
// 			$formula = rtrim($formula, "|");
// 			$formula .= ",";
// 		}
// 		fclose($handle);
// 	}
// 	echo rtrim($formula, ",");
// }

?>