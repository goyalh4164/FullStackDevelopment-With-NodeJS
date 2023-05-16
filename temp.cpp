#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class BSTIterator {
    int curr=0;
    vector<int> v;
    void inorder(TreeNode *root){
        if(root){
            inorder(root->left);
            v.push_back(root->val);
            inorder(root->right);
        }
    }
public:
    BSTIterator(TreeNode* root) {
        inorder(root);
    }
    
    int next() {
        int ans = v[curr];
        curr++;
        return ans;

    }
    
    bool hasNext() {
        return curr < v.size();
    }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator* obj = new BSTIterator(root);
 * int param_1 = obj->next();
 * bool param_2 = obj->hasNext();
 */