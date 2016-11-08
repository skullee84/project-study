<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
  <title>Page..</title>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
</head>
<body>
  <div>
    <h2>UserList..</h2>
    <ul>
      <c:forEach items="${data}" var="item">
        <li>id: ${item.id}, name: ${item.name }</li>
      </c:forEach>
    </ul>
  </div>
</body>
</html>
