export default () => {
  return (
    <div>
      <div>
        <h1>
          Docker Images
        </h1>
        <ul>
          <li>
            An image is an executable package that includes everything needed to run an application.
          </li>
          <li>
            An image consists of several read only layers of other images.
          </li>
          <li>
            Each layer of the image adds new functionality or information to the image
          </li>
          <li>
            An image cannot be modified, but it can be replaced.
          </li>
        </ul>
      </div>
      
      <br /><br /><br />

      <div>
        <h2>
          Search a public image in docker store
        </h2>
        <code>
          <em><h3>docker search SEARCH_TERM</h3></em>
          <ul>
            <li>
              Search's for the SEARCH_TERM in in docker store and displays the results in terminal
            </li>
            <li>
              Stars in a repo generally suggests how good it is
            </li>
            <li>
              Docker also produces and updates official images for a lot of environments
            </li>
            <li>
              docker search has following flags:
              <ol>
                <li>
                  <h4>--filter (-f)</h4>
                  <p>It filters the results returned by search command</p>
                  <p>
                    e.g. docker search --filter stars=50 python  (50 or more stars)
                  </p>
                  <p>
                    e.g. docker search --filter stars=100 --filter is-official=true python
                  </p>
                  <p>
                    e.g. docker search --filter limit=10 python
                  </p>
                </li>
              </ol>
            </li>
          </ul>
        </code>
      </div>

      <br /><br /><br />

      <div>
        <h2>
          Pull an image
        </h2>
        <code>
          <em><h3>docker pull STORE/IMAGE:TAG</h3></em>
          <ul>
            <li>
            It downloads the image from docker hub/store.
            </li>
            <li>
              Without a tag, image with latest tag will be downloaded
            </li>
            <li>
              docker pull has following flags:
              <ol>
                <li>
                  <h4>-a</h4>
                  <p>Pull all the tagged images in the repo</p>
                  <p>
                    e.g. docker pull hello-world
                  </p>
                  <p>
                    e.g. docker pull docker/whalesay
                  </p>
                  <p>
                    e.g. docker pull -a python
                  </p>
                </li>
                <li>
                  <h4>--disable-content-trust</h4>
                  <p>Used to blindly trust an unsigned image</p>
                  <p>
                    e.g. docker pull --disable-content-trust hello-world
                  </p>
                </li>
              </ol>
            </li>
          </ul>
        </code>
      </div>

      <br /><br /><br />

      <div>
        <h2>
          See local images
        </h2>
        <code>
          <em><h3>docker images</h3></em>
          <ul>
            <li>
              To see which images are present locally
            </li>
            <li>
              docker images has following flags:
              <ol>
                <li>
                  <h4>-a</h4>
                  <p>show all the images along with the intermediate images</p>
                  <p>
                    e.g. docker images -a
                  </p>
                </li>
                <li>
                  <h4>--digests</h4>
                  <p>show digests of the images (digest refers to the root of registry store image)</p>
                  <p>
                    e.g. docker images --digests
                  </p>
                </li>
                <li>
                  <h4>-q</h4>
                  <p>show only numeric ids of the pulled images</p>
                  <p>
                    e.g. docker images -q
                  </p>
                </li>
                <li>
                  <h4>--no-trunc</h4>
                  <p>Do not trunc the image id</p>
                  <p>
                    e.g. docker images --no-trunc
                  </p>
                </li>
                <li>
                  <h4>--filter</h4>
                  <p>To filter the output of docker images</p>
                  <p>
                    e.g. docker images --filter "before=hello-world" (shows all the images downloaded before this one)
                  </p>
                  <p>
                    e.g. docker images --filter "since=docker/whalesay" (after)
                  </p>
                </li>
              </ol>
            </li>
          </ul>
        </code>
      </div>

      <br /><br /><br />

      <div>
        <h2>
          See image layers
        </h2>
        <code>
          <em><h3>docker image history [OPTIONS] IMAGE</h3></em>
          <ul>
            <li>
              See different layers image was built with
            </li>
              e.g. docker image history redis
          </ul>
        </code>
      </div>

      <br /><br /><br />

      <div>
        <h2>
          Save/Remove an image in/from a tar file
        </h2>
        <code>
          <em><h3>docker image save IMAGE:TAG {">"} FILENAME.tar</h3></em>
          <ul>
            <li>
              save a file as a tar. Useful for offline sharing
            </li>
            e.g. docker image save redis:latest {">"} redis.tar
          </ul>
          <br /><br />

          <em><h3>docker import FILENAME.tar IMAGE:TAG</h3></em>
          <ul>
            <li>
              retrieve an image from a tar file to IMAGE:TAG
            </li>
            e.g. docker import redis.tar redis:latest
          </ul>
          <br /><br />

          <em><h3>docker load {"<"} FILENAME.tar</h3></em>
          <ul>
            <li>
              same as import but cannot assign a custom name
            </li>
            e.g. docker load {"<"} redis.tar
          </ul>
        </code>
      </div>

      <br /><br /><br />

      <div>
        <h2>
          Tagging an image
        </h2>
        <code>
          <em><h3>docker image tag ORIGINAL_IMAGE[:ORIGINAL_TAG] NEW_IMAGE[:NEW_TAG]</h3></em>
          <ul>
            <li>
            creates a new tag for existing image. It will not copy the image, just a new reference to it.
            </li>
            e.g. docker tag hello-world:latest hola-cuernavaca:v1
          </ul>
        </code>
      </div>

      <br /><br /><br />

      <div>
        <h2>
          Remove an image/tag
        </h2>
        <code>
          <em><h3>docker rmi IMAGE_ID</h3></em>
          <em><h3>docker image rm IMAGE_ID</h3></em>
          <ul>
            <li>
              Remove an image using image id
            </li>
            e.g. docker image rm redis
          </ul>
          <br /><br />
        </code>
      </div>

      <br /><br /><br />

      <div>
        <h2>
          Run an image (container)
        </h2>
        <code>
          <em><h3>docker run [options] IMAGE</h3></em>
          <ul>
            <li>
              Run an image. Download if not found locally.
            </li>
            <li>
              docker run has following flags:
              <ol>
                <li>
                  <h4>-d=[false/true]</h4>
                  <p>Whether or not torun in background(detached mode). Print the container id.</p>
                  <p>
                    e.g. docker run -d --name server httpd
                  </p>
                </li>
                <li>
                  <h4>-p [host:container]</h4>
                  <p>Map host port to container port.</p>
                  <p>
                    e.g. docker run -d  -p 80:80 httpd
                  </p>
                </li>
                <li>
                  <h4>--name [NAME]</h4>
                  <p>Name of the container to run this image in</p>
                  <p>
                    e.g. docker run -d --name server httpd
                  </p>
                </li>
                <li>
                  <h4>-t</h4>
                  <p>open terminal in container</p>
                  <p>
                    e.g. docker run --name stevemcqueen -it ubuntu:17.10
                  </p>
                </li>
              </ol>
            </li>
          </ul>
        </code>
      </div>

      <br /><br /><br />

      <div>
        <h2>
          View Image content
        </h2>
        <code>
          <em><h3>docker image inspect IMAGE</h3></em>
          <ul>
            <li>
              Inspect an image
            </li>
            <li>
              docker image inspect has following flags:
              <ol>
                <li>
                  <h4>--format</h4>
                  <p>Extract particular result from the output</p>
                  <p>
                    e.g. docker image inspect redis --format {"'{{.ContainerConfig.Hostname}}'"} (value only)
                  </p>
                  <p>
                    e.g. docker image inspect redis --format {"'{{.Created}}'"}  (value only)
                  </p>
                  <p>
                    e.g. docker image inspect redis --format {"'{{json .ContainerConfig}}'"}  (key: value
                  </p>
                </li>
              </ol>
            </li>
          </ul>
        </code>
      </div>

      <br /><br /><br />

      <div>
        <h2>
          Want to save disk space?
        </h2>
        <code>
          <em><h3>docker image prune</h3></em>
          <ul>
            <li>
            Remove all the dangling images. Images associated neither with a complete image nor with a container.
            </li>
            <li>
              docker image prune has following flags:
              <ol>
                <li>
                  <h4>-a</h4>
                  <p>Remove all the dangling images not associated with a container</p>
                  <p>
                    e.g. docker image prune -a
                  </p>
                </li>
              </ol>
            </li>
          </ul>
        </code>
      </div>

    </div>
  );
}
