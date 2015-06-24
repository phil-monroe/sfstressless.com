sprockets.append_path File.join root, 'bower_components'


set :css_dir,    'stylesheets'
set :js_dir,     'javascripts'
set :images_dir, 'images'

activate :livereload
configure :build do
end
