FROM centos:7

#RUN yum -y update
#node 10 버전 설치
RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash -
RUN yum install -y nodejs
RUN yum -y install git

#truffle 4버전 설치
RUN npm install -g truffle@4.1.15

WORKDIR /home/
#개발 도구 설치
RUN yum -y groupinstall "Development Tools" 
RUN yum -y install kernel-devel kernel-headers


#디펜던시 설치
#RUN npm install
#COPY addition-game-starter/package.json /home
#COPY addition-game-starter/package-lock.json /home

# todo : 컨테이너 실행후 불륨연결된 디렉토리에서 npm install 해야한다.