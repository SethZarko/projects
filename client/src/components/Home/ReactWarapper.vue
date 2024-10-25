<script>
import React from 'react';
import { createRoot } from 'react-dom/client';
import Contact from './Contact.jsx';


export default {
  name: 'ReactWrapper',
  data() {
    return {
      reactRoot: null
    };
  },
  mounted() {
    this.reactRoot = this.$refs.reactRoot;
    if (this.reactRoot) {
        const root = createRoot(this.reactRoot);
        root.render(React.createElement(Contact));
    }
  },
  beforeDestroy() {
    if (this.reactRoot) {
        const root = createRoot(this.reactRoot);
        root.unmount();
    }
  }
}
</script>

<template>
    <div ref="reactRoot"></div>
</template>