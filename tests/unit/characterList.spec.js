import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CharacterList from '../../src/views/CharacterList.vue';

const localVue = createLocalVue();
let actions;

localVue.use(Vuex);
beforeEach(() => {
    actions = {
        fetchCharacterList: jest.fn(),
    }
    const store = new Vuex.Store({
      actions
    })
    const wrapper = shallowMount(CharacterList, {
        store,
        localVue
    });
});

describe('Component: CharacterList', () => {
    describe('On mounting the component', () => {
        it('should dispatch an action to the store', () => {
            expect(actions.fetchCharacterList).toHaveBeenCalled();
        });
    });
});

