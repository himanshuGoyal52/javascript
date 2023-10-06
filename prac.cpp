#include<iostream>
#include <vector>

using namespace std;

int gcd(int a , int b){
    if (a == 0)
       return b;
    if (b == 0)
       return a;
  
    // base case
    if (a == b)
        return a;
  
    // a is greater
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}

int main(){
    int n;
    cin>>n;
    cout<<endl;
    int count=0;
    vector<int> v;
    for (int i = 0; i < n; i++)
    {
        cin>>v[i];
    }
    cout<<endl;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if( gcd(v[i] , v[j]) ){
                count++;
            }
        }
        
    }
    cout<<count;
    
    return 0;
}