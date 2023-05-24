import axios from 'axios';
import { fetchContinents } from '../app/features/continent/continentSlice';

// Mock axios module
jest.mock('axios');

describe('fetchContinents', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return data when the request is successful', async () => {
    const responseData = [
      { continent: 'Asia', cases: 1000 },
      { continent: 'Europe', cases: 2000 },
    ];

    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: responseData });

    const action = fetchContinents('continents');
    const result = await action.payload;
    expect(result).toBeFalsy();
  });
});
