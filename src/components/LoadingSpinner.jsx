import React from 'react';

export default function LoadingSpinner({ loading }) {
	return loading ? <img className="db center" src="/loading.svg" alt="spinner" /> : null;
}
