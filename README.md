# RAILS-REACT

Sample application to create web application using Ruby on Rails and reactJS. Please make sure you have installed ruby, nodejs, npm, yarn, mysql etc.

### Intall ruby 2.4.2 using rbenv
```
rbenv install 2.4.2
rbenv rehash
```

### System dependencies
```
gem install bundler
bundle install --path vendor/bundle
```

### Check nodeJS version (>=v6.12.3)
```
node -v or nodejs -v
```

### Node package manager version (>=3.10.10)
```
npm --version
```

### Install yarn
```
sudo npm install -g yarn
```

### Check out master branch
```
git fetch
git checkbout development
```

### Install node packages using yarn
```
yarn install
```

### Configuration 
Save as following files as yml. Update database configuration and development secret key.
```
config/database.yml.example
config/secrets.yml.example
config/webpacker.yml.example
```

### Database creation
```
bundle exec rake db:create
```

### Database initialization
```
bundle exec rake db:migrate
```

### Load seed data
```
bundle exec rake db:seed
```

### Run application
```
bundle exec rails s
```
### Deployment instructions
....
