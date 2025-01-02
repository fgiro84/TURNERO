

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'



// Composables
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import { es, pt, fr } from 'vuetify/locale'

const messages = {
    es: {
      $vuetify: {
        ...es,
        dataIterator: {
          Store: 'Tienda',
          Stores: 'Tiendas de ',
          BoxState: 'Estado Total de las Cajas',
          BoxState2: 'Cajas Abiertas:',
          of: 'de',
          atention: 'Clientes Atendidos Hoy',
          yesterday: 'Ayer',
          yesterday30: 'Últimos 30 Días',
          timep: 'Tiempo Promedio de Atención',
          box:'CAJA',
          state: 'ESTADO:',
          open: 'ABIERTO',
          close: 'CERRADO',
          data: 'DATA',
          databox: 'Datos de la Caja',
          timeprom: 'Tiempo Promedio',
          client: 'Clientes Atendidos',
          atention1: 'En Atención',
          wait: 'En Espera',
          next: "Siguiente",
          time1: 'Tiempo (Segundos)',
          time2: 'Tiempo de Espera (s)',
          atention2: "Atención de Cajas",
          account: "Cuenta",   
          mail: "Dirección de correo electrónico",  
          pass: "Ingresa tu contraseña",
          log: "ACCESO",
          sign: "Regístrate ahora",     
        },
        customMessage: 'Este es un mensaje personalizado en Español',
      },
    },
    pt: {
      $vuetify: {
        ...pt,
        dataIterator: {
          Store: 'Loja',
          Stores: 'Loja ',
          BoxState: 'Status Total das Caixas',
          BoxState2: 'Caixas Abertas:',
          of: 'de',
          atention: 'Clientes Atendidos Hoje',
          yesterday: 'Ontem',
          yesterday30: 'Últimos 30 Dias',
          timep: 'Tempo Médio de Atendimento',
          box:'CAIXA',
          state: 'ESTADO:',
          open: 'ABRIR',
          close: 'FECHADO',
          data: 'DADOS',
          databox: 'Dados da Caixa',
          timeprom: 'Tempo Médio',
          client: 'Clientes Atendidos',
          atention1: 'Atenção',
          wait: 'Esperando',
          next: "Seguindo",
          time1: 'Tempo (Segundos)',
          time2: 'Tempo de Espera (s)',
          atention2: "Atenção do Caixa",
          account: "Conta", 
          mail: "Endereço de email",
          pass: "Digite sua senha",
          log: "CONECTE-SE", 
          sign: "Inscreva-se agora", 
        },
        customMessage: 'Este es un mensaje personalizado en Portugués',
      },
    },
    fr: {
      $vuetify: {
        ...fr,
        dataIterator: {
          Store: 'Magasin',
          Stores: 'Boutique ',
          BoxState: 'Etat total de la boîte',
          BoxState2: 'Boîtes Ouvertes:',
          of: 'sur',
          atention: "Clients servis aujourd'hui",
          yesterday: 'Hier',
          yesterday30: '30 Derniers Jours',
          timep: 'Temps de Service Moyen',
          box:'BOÎTE',
          state: 'ÉTAT:',
          open: 'OUVRIR',
          close: 'FERMÉ',
          data: 'DONNÉES',
          databox: 'Données de la Boîte',
          timeprom: 'Temps Moyen',
          client: 'Clients Servis',
          atention1: 'Attention',
          wait: 'En Attendant',
          next: "Suivant",
          time1: 'Temps (Secondes)',
          time2: "Temps d'Attente (s)",
          atention2: "À l'attention du Caissier",
          account: "Compte", 
          mail: "Adresse email",
          pass: "Entrez votre mot de passe",
          log: "SE CONNECTER",
          sign: "Inscrivez-vous maintenant",
          
        },
        customMessage: 'Este es un mensaje personalizado en Francés',
      },
    },
  }
  
  const i18n = createI18n({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n
    locale: window.navigator.language.substring(0, 2) || 'es',
    fallbackLocale: 'es',
    messages,
  })
  
  const vuetify = createVuetify({
    locale: {
      adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
  })


const app = createApp(App)

app.use(i18n)
app.use(vuetify)

registerPlugins(app)

app.mount('#app')