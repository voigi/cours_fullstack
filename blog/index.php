<?php 

print_r($_POST);

$title=$_POST['title'] ?? '';
$teaser=$_POST['teaser'] ?? '';
$content=$_POST['content'] ?? '';
$category=$_POST['category'] ?? '';
$publish=$_POST['publish'] ?? 'no';

include 'form.phtml';

?>