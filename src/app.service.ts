import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getIndex(): string {
	return `
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Academic Activity Hub</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  </head>
  <body>
    <h1>Academic Activity Hub</h1>
    
    <!-- TABLE 1 -->
    <h2>Научные публикации</h2>
    <table id="sci-pub"></table>
    <script>
      $.ajax({
        url: "/aah/sci-pub",
        success: function(data) {
          var thead = $('<thead>').appendTo($('#sci-pub'));
          var rowHead = $('<tr>').appendTo(thead);
          $('<th>').text('Название').appendTo(rowHead);
          $('<th>').text('Автор').appendTo(rowHead);
          $('<th>').text('Дата публикации').appendTo(rowHead);
          $('<th>').text('DOI').appendTo(rowHead);
          $('<th>').text('ISSN').appendTo(rowHead);
          $('<th>').text('Ссылка').appendTo(rowHead);
          $('<th>').text('Вид').appendTo(rowHead);
          $('<th>').text('Язык').appendTo(rowHead);
          $('<th>').text('Журнал').appendTo(rowHead);
          $('<th>').text('Место конференции').appendTo(rowHead);
          $('<th>').text('Том').appendTo(rowHead);
          $('<th>').text('Страница').appendTo(rowHead);
          data.forEach(function(pub) {
            var row = $('<tr>').appendTo($('#sci-pub'));
            $('<td>').text(pub.name).appendTo(row);
            $('<td>').text(pub.author).appendTo(row);
            $('<td>').text(pub.pubDate).appendTo(row);
            $('<td>').text(pub.DOI).appendTo(row);
            $('<td>').text(pub.ISSN).appendTo(row);
            $('<td>').text(pub.link).appendTo(row);
            $('<td>').text(pub.type).appendTo(row);
            $('<td>').text(pub.lang).appendTo(row);
            $('<td>').text(pub.journal).appendTo(row);
            $('<td>').text(pub.place).appendTo(row);
            $('<td>').text(pub.volume).appendTo(row);
            $('<td>').text(pub.page).appendTo(row);
          });
        }
      });
    </script>

    <!-- TABLE 2 -->
    <h2>Пользователи</h2>
    <table id="users"></table>
    <script>
      $.ajax({
        url: "/aah/user",
        success: function(data) {
          var thead = $('<thead>').appendTo($('#users'));
          var rowHead = $('<tr>').appendTo(thead);
          $('<th>').text('Имя').appendTo(rowHead);
          $('<th>').text('Фамилия').appendTo(rowHead);
          $('<th>').text('Логин').appendTo(rowHead);
          $('<th>').text('Пароль').appendTo(rowHead);
          $('<th>').text('Email').appendTo(rowHead);
          $('<th>').text('Роль').appendTo(rowHead);
          data.forEach(function(task) {
            var row = $('<tr>').appendTo($('#users'));
            $('<td>').text(task.name).appendTo(row);
            $('<td>').text(task.surname).appendTo(row);
            $('<td>').text(task.login).appendTo(row);
            $('<td>').text(task.passw).appendTo(row);
            $('<td>').text(task.email).appendTo(row);
            $('<td>').text(task.role).appendTo(row);
          });
        }
      });
	  </script>
	  
	  <!-- TABLE 3 -->
	  <h2>Журналы</h2>
	  <table id="journal"></table>
	  <script>
		$.ajax({
		  url: "/aah/journal",
		  success: function(data) {
			var thead = $('<thead>').appendTo($('#journal'));
			var rowHead = $('<tr>').appendTo(thead);
			$('<th>').text('Название').appendTo(rowHead);
			$('<th>').text('Тематика').appendTo(rowHead);
			$('<th>').text('Периодичность').appendTo(rowHead);
			$('<th>').text('Место конференции').appendTo(rowHead);
			$('<th>').text('ISSN').appendTo(rowHead);
			$('<th>').text('Год издания').appendTo(rowHead);
			$('<th>').text('Контактная информация').appendTo(rowHead);
			data.forEach(function(task) {
			  var row = $('<tr>').appendTo($('#journal'));
			  $('<td>').text(task.name).appendTo(row);
			  $('<td>').text(task.theme).appendTo(row);
			  $('<td>').text(task.period).appendTo(row);
			  $('<td>').text(task.place).appendTo(row);
			  $('<td>').text(task.ISSN).appendTo(row);
			  $('<td>').text(task.year).appendTo(row);
			  $('<td>').text(task.contact).appendTo(row);
			});
		  }
		});
		</script>
		
		<!-- TABLE 4 -->
		<h2>Конференции</h2>
		<table id="conference"></table>
		<script>
		  $.ajax({
			url: "/aah/conference",
			success: function(data) {
			  var thead = $('<thead>').appendTo($('#conference'));
			  var rowHead = $('<tr>').appendTo(thead);
			  $('<th>').text('ID').appendTo(rowHead);
			  $('<th>').text('Название').appendTo(rowHead);
			  $('<th>').text('Дата').appendTo(rowHead);
			  $('<th>').text('Место').appendTo(rowHead);
			  $('<th>').text('Организатор').appendTo(rowHead);
			  $('<th>').text('Выступающий').appendTo(rowHead);
			  $('<th>').text('Программа').appendTo(rowHead);
			  $('<th>').text('Тезисы').appendTo(rowHead);
			  data.forEach(function(task) {
				var row = $('<tr>').appendTo($('#conference'));
				$('<td>').text(task.id).appendTo(row);
				$('<td>').text(task.name).appendTo(row);
				$('<td>').text(task.date).appendTo(row);
				$('<td>').text(task.place).appendTo(row);
				$('<td>').text(task.host).appendTo(row);
				$('<td>').text(task.speaker).appendTo(row);
				$('<td>').text(task.prog).appendTo(row);
				$('<td>').text(task.thesis).appendTo(row);
			  });
			}
		  });
    </script>
    
    <!-- TABLE - STYLEs -->
    <style>
      table {
        border-collapse: collapse;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        width: 100%;
      }

      table td, table th {
        border: 1px solid #ddd;
        padding: 10px;
      }

      table thead {
        background-color: #337ab7;
        color: #fff;
      }

      table tr:nth-child(even) {
        background-color: #f5f5f5;
      }
    </style>
  </body>
  `;
  }
}
