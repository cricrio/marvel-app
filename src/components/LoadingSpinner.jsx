import React from 'react';

export default function LoadingSpinner({ loading }) {
	return loading ? <img className="db center white" src="/loading.svg" alt="spinner" /> : null;
}
