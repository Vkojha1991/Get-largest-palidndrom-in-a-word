function isPalindrome(s) {
					var rev = s.split("").reverse().join("");
						return s == rev;
					}

					function isPrime(number){ 
							if (number <= 1)
							return false;
							if (number <= 3)
							return true;

							if (number%2 == 0 || number%3 == 0)
							return false;

							for (var i=5; i*i<=number; i=i+6)
								{
									if (number%i == 0 || number%(i+2) == 0)
									return false;
								}

								return true;
						}

					function longestPalind(s){
						var maxp_length = 0,
						maxp = '';
						
						for(var i=0; i < s.length; i++) {
							var subs = s.substr(i, s.length);
							
							for(var j=subs.length; j>=0; j--) {
								var sub_subs = subs.substr(0, j);
								if (sub_subs.length <= 1)
									continue;
								if (isPalindrome(sub_subs)) {
									if (sub_subs.length > maxp_length) {
										maxp_length = sub_subs.length;
										maxp = sub_subs;
									}
								}
							}
						}

					var ab = isPrime(maxp.length);
					console.log(maxp);
						if(ab == true) {
							console.log("Prime");
						}
						else {
							console.log("Not Prime ")
						}
					}
					console.log(longestPalind("dkkkjkxvFdsdgdsagjlkjlkjlTTdsfasdfsPTTlkdjffljdslfj"));
