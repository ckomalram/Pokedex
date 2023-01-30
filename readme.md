Curso de react native en platzi

https://platzi.com/cursos/react-native-listas-apis/

# Use context auth:
Basicamente el use context de auth actua como una inyección de dependencia de angular.
Se crea inicialmente un contexto,
Se declaran las propiedades que tendrá (variables ó funciones)
Se crea na función para inicializar modo provider.
Se definen las funciones
Se define el valuecontext.
se retorna como provider y sus valores indicando que los children de este provider puedan heredarlos o inyectarlos.
Se crea un hook personalizado.
El hook será creado en base al ontexto authcontext.
Se agrega el auth provider por encima de los componentes que podrán heredarlos.
Se utiliza el useAuth en los lugares que se utilizarán las funciones declaraas en el contexto.


# Link para compilar apk android y ios 
You need firt install cli of expo:
    npm install -g expo-cli


https://docs.expo.dev/build/setup/

https://docs.expo.dev/build-reference/apk/

https://docs.expo.dev/archive/classic-updates/building-standalone-apps/
    To build an APK, run the command:
        * expo build:android -t apk
    We recommend building an Android App Bundle (aab) for submitting the app to the Google Play Store. To build an aab, run the command:
        * expo build:android -t app-bundle

https://developer.apple.com/programs/