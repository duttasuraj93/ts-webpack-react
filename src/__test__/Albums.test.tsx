import * as React from 'react';
// import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import Albums from '../routes/Albums';
import { Provider } from 'react-redux'
import { store } from '../store/index'
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'
import reducer, { getAlbums, setPage, removeAlbum, addAlbum, updateAlbum } from '../redux/reducers/albums'


describe('Albums redux state tests', () => {
  it('Should initially set games to an empty object', () => {
    const state = store.getState().albums
    expect(state.albumList).toEqual([])
    expect(state.page).toEqual(1)
    expect(state.status).toEqual('idle')
    expect(state.error).toEqual(null)
  })
})
