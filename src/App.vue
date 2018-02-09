<template>
  <div class="page-container">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">My another SPA</span>
      </md-app-toolbar>
      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>
        <md-list>
          <md-list-item>
            <md-icon>account_balance</md-icon>
            <span class="md-list-item-text"><a href="/#/">main</a></span>
          </md-list-item>
          <md-list-item>
            <md-icon>language</md-icon>
            <span class="md-list-item-text"><a href="/#/fraction">fraction</a></span>
          </md-list-item>
          <md-list-item>
            <md-icon>compare_arrows</md-icon>
            <span class="md-list-item-text"><a href="/#/websocket">websocket</a></span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <div class="md-layout">
          <div class="md-layout-item">
            <router-view/>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .md-content.md-app-content.md-flex.md-theme-default {
    overflow: hidden;
  }
  .page-container {
    padding: 16px;
  }
  .md-app {
    border: 1px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 230px;
    min-height: calc(100vh - 32px);
    max-width: calc(100vw - 125px);
  }
</style>
