module.exports = {
  apps : [{
    name: 'nuxt',
    script: './node_modules/nuxt-start/bin/nuxt-start.js',
exec_mode : 'cluster',
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
//    args: 'start',
    instances: 1,
    autorestart: true,
    //max_memory_restart: '1G',

  }]

};
