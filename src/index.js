module.exports = {
  register () {
  },

  getComponentPaths () {
    return {
      'Stats': 'components/stats.js',
    }
  },

  getWalletTabs () {
    return [
      {
        // TODO allow translations
        tabTitle: 'Statistics',
        componentName: 'Stats'
      }
    ]
  }
}
