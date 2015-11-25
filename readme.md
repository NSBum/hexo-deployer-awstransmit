Deploy Hexo blog to S3 bucket using Transmit

### Installation

``` bash
$ npm install hexo-deployer-awstransmit
```

### Options

You can configure this plugin in your blog's `_config.yml`.

``` yaml
deploy:
  type: awstransmit
  favorite: name-of-transmit-favorite-used-to-sync
  timeout: 1800
```

- `favorite` - the name of the Transmit favorite that is used to sync the local `public` directory to the S3 bucket that hosts the blog.

- `timeout` - optional. This parameter is used to circumvent an issue with long-running AppleScript processes. Since this plugin requires AppleScript we use the timeout parameter to avoid the timeout. The default value is 1800 (seconds). If timeout issues are encountered, a longer value can be specified.

### Background

Another option for deploying hexo blog to an S3 bucket. You may find that the [hexo-deployer-s3](https://www.npmjs.com/package/hexo-deployer-s3) or the [hexo-deployer-aws-s3](https://www.npmjs.com/package/hexo-deployer-aws-s3) work for you. If so, you should use them because there are not external dependencies. Since [Transmit](https://panic.com/transmit/) works well to synchronize an S3 bucket with a local directory, this hexo deployment plugin is designed to work in tandem with it.

### Requirements

- Mac OS X
- Transmit 4.0+

### Use

- Create a [Transmit](https://panic.com/transmit/) favorite that syncs the `public` directory of your local blog to the S3 bucket on which it's hosted. At a minimum you'll need:
    - AWS access Key ID
    - AWS Secret
    - Remote path
    - Local path
- Configure `_config.yml` as above.
- then deploy as usual:

``` bash
$ hexo deploy
```
