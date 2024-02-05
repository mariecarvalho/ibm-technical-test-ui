import axios from 'axios';

const apiUrl = 'http://demo2181150.mockable.io/';

export const getMagics = async () => {
    try {
        const response = await axios.get(apiUrl + 'spells');
        return response.data.spells;
    } catch (error) {
        console.error('Error fetching magic spells:', error);
        throw error;
    }
};

export const createMagic = async (magic) => {
    try {
        const response = await axios.post(apiUrl + 'spells', magic);
        return response.data;
    } catch (error) {
        console.error(`Error creating magic spells: ${magic.name}`);
        throw error;
    }
};

export const updateMagic = async (magicId) => {
    try {
        const response = await axios.put(apiUrl + 'spells/findById', magicId);
        return response.data;
    } catch (error) {
        console.error(`Error updating magic spells: ${magicId}`);
        throw error;
    }
};

export const deleteMagic = async (magicId) => {
    try {
        const response = await axios.delete(apiUrl + 'spells/findById', magicId);
        return response.data
    } catch (error) {
        console.error(`Error deleting magic spells: ${magicId}`);
        throw error;
    }
};
