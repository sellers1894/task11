<?php
function random_html_color()
{
    return sprintf( '#%02X%02X%02X', rand(100, 255), rand(0, 255), rand(0, 255) );
}
?>

<?php
if (isset($_GET["add"])){
	$arr[] = str_replace("|","",str_replace(")","",str_replace("(","",$_GET["add"])));
	$arr[] = 3;
	$arr[] = random_html_color();
	$b = false;
	if (($handle = fopen("atom.csv", "r")) !== FALSE) {
		$i = 0;
		while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
			$array[$i][0] = $data[0];
			$array[$i][1] = $data[1];
			$array[$i][2] = $data[2];
			if (!strnatcasecmp($array[$i][0], $arr[0])){
				$array[$i][1] += $arr[1];
				$b = true;
			}
			$i++;
		}
		fclose($handle);
	}

	if (!$b)
		$array[] = $arr;

	$fp = fopen('atom.csv', 'w');
	foreach ($array as $fields) {
	    fputcsv($fp, $fields);
	}
	fclose($fp);

}
elseif (isset($_GET["newElem"])){
	$arr = explode("|", $_GET["newElem"]);
	$fp = fopen('elements.csv', 'a');
	fputcsv($fp, $arr);
	fclose($fp);
}
elseif (isset($_GET["info"])){
	$elem = $_GET["info"];
	if (($handle = fopen("elements.csv", "r")) !== FALSE) {
		while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
			foreach ($data as $key => $value) {
				if (!strnatcasecmp($elem, stristr($value, '(', true)))
				$arr[] = $data;
			}
		}
		fclose($handle);
	}
	$str = "";
	if (empty($arr))
		echo "Нет формул";
	else{
		foreach ($arr as $key => $value){
			foreach ($value as $key1 => $value1)
				$str .= $value1;
			$str .= "|";
		}
		echo rtrim($str, "|");
	}
}
else{
	if (($handle = fopen("elements.csv", "r")) !== FALSE) {
		while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
			foreach ($data as $key => $value) {
				$formula .= $value."|";
			}
			$formula = rtrim($formula, "|");
			$formula .= ",";
		}
		fclose($handle);
	}
	echo rtrim($formula, ",");
}

?>