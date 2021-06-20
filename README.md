# ANGULAR
  # Levantar aplicacion
    http://localhost:4200
  # Levantar la app con la ip del equipo
    ng serve --host 0.0.0.0

  # Generar un componente
    ng g c shared/components/book --skipTests
  # Geenrar un servicio
    ng g s core/services/auth --skipTests
  # Generar un guard
    ng g g core/guards/auth --skipTests
  # Generar un modulo y routing
    ng g m templates --routing
  # Crear componentes dentro de una ruta y que se cargue en su module
    ng g c templates/basico --skipTests -is
  # Crear una rama
    git branch
  # Cambiarse de rama
    git checkout nombreRama
  # Elminar una rama
    git branch -D nombreRama
  # Merge de una rama al master
    git merge nombreRama

# GITLAB
  # Descargar cambios
    git pull upstream master
  # Subir cambios
    git push upstream master
  # Preparar cambios antes del commit
    git add "ruta" => Seleccionar archivos por ruta
    git add .      => Seleccionar todos
  # Realizar commit
    git commit -m "refactor(component): resolve conflict"

  # Resolver conflictos
    git stash list => Consultar copias locales
    git stash      => Realizar una copia local
    git pop stash  => Extraer o autofusionar copia con los archivos locales

  # Plugin install
    npm i @ngmodule/material-carousel
