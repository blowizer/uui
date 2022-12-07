let baseURL = "https://xehs0yjh.lc-cn-n1-shared.com"
export const $http = function (url,method='GET',data={}){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseURL+url,
			method,
			header:{
				"X-LC-Id": "XEhs0yJhjujR67BCV7jNdSaG-gzGzoHsz",
				"X-LC-Key": "VOnu3J0I91d39Mh7jgYw5qf7",
				"Content-Type": "application/json"
			},
			data,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

export const $get = function(url,data={}){
	return $http(url,'GET',data)
}

export const $post = function(url,data={}){
	return $http(url,'POST',data)
}

export const $put = function(url,data={}){
	return $http(url,'PUT',data)
}

export const $delete = function(url,data={}){
	return $http(url,'DELETE',data)
}
