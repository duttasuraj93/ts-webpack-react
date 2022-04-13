import * as React from 'react';
// import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import Albums from '../routes/Albums';
import { Provider } from 'react-redux'
import { store } from '../store/index'
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'
import reducer, { getAlbums, setPage, removeAlbum, addAlbum, updateAlbum } from '../redux/reducers/albums'

// jest.spyOn(window.localStorage.__proto__, 'email');
// window.localStorage.__proto__.setItem = jest.fn();
// const spy = jest.spyOn(Storage.prototype, 'email');

interface AlbumState {
  userId: number
  id: number
  title: string
}

interface AlbumListState {
  albumList: AlbumState[]
  page: number,
  status: string,
  error: any
}


const initialState: AlbumListState = {
  albumList: [],
  page: 1,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null,
}

interface PageState {
  page: number,
}
