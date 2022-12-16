#include<bits/stdc++.h>
using namespace std;

 
  struct ListNode {
      int val;
      ListNode *next;
      ListNode() : val(0), next(nullptr) {}
      ListNode(int x) : val(x), next(nullptr) {}
      ListNode(int x, ListNode *next) : val(x), next(next) {}
  };

class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
              ListNode * temp=new ListNode(-1);
              ListNode * ans=temp;
              while(!head){
                if(head->val != temp->val) {temp->next=head; head=head->next; temp=temp->next;}
              }
              return ans->next;
    }
};
int main()
{
    return 0;
}