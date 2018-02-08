## Installation (centos)
```
$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2
$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
$ sudo yum install docker-ce
```
- Docker needs root permissions to run. It is possible to run it without sudo.


## Docker image
```
- An image is an executable package that includes everything needed to run an application.
- An image consists of several read only layers of other images.
- Each layer of the image adds new functionality or information to the image
- An image cannot be modified, but it can be replaced.
```

### Search an image(public) in docker store

commands:
- **docker search SEARCH_TERM**: Search's for the search term in docker store and displays the results.
    Stars generally mean that the image is good. It has following flags:
```
1. --filter (-f): filter the results
    e.g. docker search --filter stars=50 python  (50 or more stars)
    e.g. docker search --filter stars=100 --filter is-official=true python
    e.g. docker search --filter limit=10 python
``` 

### Pull an image

commands:
- **docker pull STORE/IMAGE:TAG**: It downloads the image from docker hub/store.
    It has following flags:
```
1. -a: Pull all the tagged images in the repo
      e.g. docker pull hello-world
      e.g. docker pull docker/whalesay
      e.g. docker pull -a python
2. --disable-content-trust: to trust an unsigned image
```

### See pulled images

commands:
- **docker images**: To see which images are present locally. It has following flags
```
1. -a: show all the images along with the intermediate images
2. --digests: show digests of the images ( digest refers to the root of registry store image)
3. -q: show only numeric ids
4. --filter: To filter the output.
    e.g. docker images --filter "before=hello-world" (shows all the images downloaded before this one)
    e.g. docker images --filter "after=docker/whalesay" (after)
5. --no-trunc: Do not trunc the image id
```

### See image layers

commands:
- **docker image history [OPTIONS] IMAGE**. See different layers image was built with


### save/remove an image in/from a tar file

commands:
- **docker image save IMAGE:TAG > FILENAME.tar**: save a file as a tar. Useful for offline sharing
- **docker import FILENAME.tar IMAGE:TAG**: retrieve an image from a tar file
- **docker load < FILENAME.tar**: same as import but cannot assign a custom name

### Tagging an image

commands:
- **docker image tag ORIGINAL_IMAGE[:ORIGINAL_TAG] NEW_IMAGE[:NEW_TAG]**:
    creates a new tag for existing image. It will not copy the image, just a new reference to it.
```
e.g. docker tag hello-world:latest hi-cuernavaca:v1
```

### Remove an image/tag

commands:
- **docker rmi IMAGE_ID**
- **docker image rm IMAGE_ID**: Remove an image using image id

### Run an image (container)

commands:
- **docker run [options] IMAGE**: Run an image. Download if not found locally.
    It has following important flags:
```
1. -d=[false/true]: Run in background(detached mode). Print the container id.
2. -p [host:container]: Map host port to container port.
3. --name [name]: Name of the container to run this image in.
4. -t: open terminal in container

e.g. docker run hello-world
e.g. docker run docker/whalesay cowsay moo
e.g. docker run -d --name server httpd
e.g. docker run --name stevemcqueen -d -t ubuntu:17.10
```

### View Image content

commands:
- **docker image inspect IMAGE**: Inspect an image. It has following flags:
```
1. --format '{{.PARAMETER1.PARAMETER2...}}': get parameter from the result
    e.g. docker image inspect redis --format '{{.ContainerConfig.Hostname}}' (value only)
    e.g. docker image inspect redis --format '{{.Created}}'  (value only)
    e.g. docker image inspect redis --format '{{json .ContainerConfig}}'  (key: value)
```

e.g. docker image inspect hello-world



### Want to save space?

commands:
- **docker image prune**: Remove all the dangling images. Images associated neither with a complete
    image nor with a container.
- **docker image prune -a**: Remove all the dangling images not associated with a container.
