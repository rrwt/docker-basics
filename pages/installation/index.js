export default () => {
  return (
    <div>
      <h1>Installation</h1>
      <h2>To install in Redhat based system (centos)</h2>
      <code>
        <p>
          $ sudo yum install -y yum-utils device-mapper-persistent-data lvm2
        </p>
        <p>
          $ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
        </p>
        <p>
          $ sudo yum install docker-ce
        </p>
      </code>
      <br /><b /><br />

      <h2>To install in Debian based system (ubuntu)</h2>
      <code>
        <p>
          $ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
        </p>
        <p>
          $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
        </p>
        <p>
          $ sudo apt-get install docker-ce
        </p>
      </code>
    </div>
  );
}
