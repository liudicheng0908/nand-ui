<script lang="ts">
  import type { RendererElement, RendererNode, VNode, VNodeArrayChildren } from 'vue';
  import { h } from 'vue';
  import '../style/';
  export default {
    name: 'NandBreadcrumb',
    props: {
      'separator-icon': {
        type: String,
        default: () => 'aichegujiabeifen7'
      }
    },
    render(props: { separatorIcon: string }) {
      const items = (this.$slots as any).default();
      const dymanicItems: VNode<RendererNode, RendererElement, Record<string, any>> | VNodeArrayChildren | (() => any) =
        [];
      items.forEach(
        (item: VNodeArrayChildren | VNode<RendererNode, RendererElement, Record<string, any>>, i: number) => {
          dymanicItems.push(item);
          if (i < items.length - 1) {
            dymanicItems.push(h('i', { class: `nand-icon-${props.separatorIcon}` }));
          }
        }
      );
      return h('div', { class: 'nand-bread' }, dymanicItems);
    }
  };
</script>
