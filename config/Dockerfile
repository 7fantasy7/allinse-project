FROM java:8-jre
MAINTAINER Evgeny Orlov <kristian.lisov@gmail.com>

ADD ./target/config.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/config.jar"]

EXPOSE 8888