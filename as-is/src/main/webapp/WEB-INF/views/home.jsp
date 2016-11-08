<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
</head>
<body>
  <div>
    <h2>${view }</h2>
    <a href="<c:url value="/view/render/page" />">Page</a>
    <a href="<c:url value="/view/render/ajax" />">Ajax</a>
  </div>
</body>
</html>
