<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:forEach items="${data}" var="item">
  <li>id: ${item.id}, name: ${item.name }</li>
</c:forEach>