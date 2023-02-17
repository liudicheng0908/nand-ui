import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import dropdown from '../src/dropdwon.vue';
// The component to test

describe('test dropdown', () => {
  it('should render slot', () => {
    const wrapper = mount(dropdown, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(dropdown);
      expect(wrapper.classes()).toContain('nand-dropdown');
    });
  });
});
