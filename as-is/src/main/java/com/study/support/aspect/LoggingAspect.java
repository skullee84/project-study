package com.study.support.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class LoggingAspect {

    @Around(value = "execution(* com.study.app..*.*(..))")
    public Object aroundAdvice(ProceedingJoinPoint joinPoint) throws Throwable {
        String signatureInfo = getSignatureInfo(joinPoint);

        log.debug("=>> " + signatureInfo);
        Object retVal = joinPoint.proceed();
        log.debug("<<= " + signatureInfo + (retVal != null ? " : " + retVal : ""));

        return retVal;
    }

    private String getSignatureInfo(JoinPoint joinPoint) {
        String signatureName = joinPoint.getSignature().getName();
        String className = joinPoint.getTarget().getClass().getSimpleName();
        StringBuilder sb = new StringBuilder();

        Object[] args = joinPoint.getArgs();
        if (args != null && args.length > 0) {
            for (int i = 0; i < args.length; i++) {
                if (args[i] instanceof String){
                    sb.append('\"');
                }

                sb.append(args[i]);

                if (args[i] instanceof String){
                    sb.append('\"');
                }

                if (i < args.length - 1) {
                    sb.append(',');
                }
            }
        }
        return String.format("%s.%s(%s)", className, signatureName, sb.toString());
    }
}
