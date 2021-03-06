var data = {
    W17: {
        D01_A: `Given a sorted array and a target value, return the index if the target is found.
            If not, return the index where it would be if it were inserted in order.
            You may assume no duplicates in the array.
            Example 1:
            Input: [1,3,5,6], 5
            Output: 2
            
            Example 2:
            Input: [1,3,5,6], 2
            Output: 1
            
            Example 3:
            Input: [1,3,5,6], 7
            Output: 4
            
            Example 4:
            Input: [1,3,5,6], 0
            Output: 0`
    },
    W18: {
        D01_A: `Given an array with n objects colored red, white or blue,
        sort them in-place so that objects of the same color are adjacent,
        with the colors in the order red, white and blue.
        Here, we will use the integers 0, 1, and 2 to represent the color
        red, white, and blue respectively.
        Note: You are not suppose to use the library's sort function for this problem.
        Example:
        Input: [2,0,2,1,1,0]
        Output: [0,0,1,1,2,2]`,
        D02_A: `You are climbing a stair case. It takes n steps to reach to the top.
        Each time you can either climb 1 or 2 steps.
        In how many distinct ways can you climb to the top?
        Note: Given n will be a positive integer.
        Example 1:
        Input: 2
        Output: 2
        Explanation: There are two ways to climb to the top.
        1. 1 step + 1 step
        2. 2 steps
        
        Example 2:
        Input: 3
        Output: 3
        Explanation: There are three ways to climb to the top.
        1. 1 step + 1 step + 1 step
        2. 1 step + 2 steps
        3. 2 steps + 1 step`,
        D03_A: `Given an array with n objects colored red, white or blue,
        sort them so that objects of the same color are adjacent,
        with the colors in the order red, white and blue.
        Here, we will use the integers 0, 1, and 2 to represent the color
        red, white, and blue respectively.
        Note: You are not suppose to use the library's sort function for this problem.
        Implement using merge sort.
        Example:
        Input: [2,0,2,1,1,0]
        Output: [0,0,1,1,2,2]`,
        D04_A: `Given an array with n objects colored red, white or blue,
        sort them so that objects of the same color are adjacent,
        with the colors in the order red, white and blue.
        Here, we will use the integers 0, 1, and 2 to represent the
        color red, white, and blue respectively.
        Note: You are not suppose to use the library's sort function for this problem.
        Implement using quick sort.
        Example:
        Input: [2,0,2,1,1,0]
        Output: [0,0,1,1,2,2]`,
        D05_A: `1.
        Remove all elements from a linked list of integers that have value val.
        Example:
        Input:  1->2->6->3->4->5->6, val = 6
        Output: 1->2->3->4->5`
    },
    W19: {
        D01_A: `Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
        determine if the input string is valid.
        An input string is valid if:
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
        Note that an empty string is also considered valid.
        
        Example 1: Input: "()"
        
        Output: true
        
        Example 2: Input: "()[]{}"
        
        Output: true
        
        Example 3: Input: "(]"
        
        Output: false
        
        Example 4: Input: "([)]"
        
        Output: false
        
        Example 5: Input: "{[]}"
        
        Output: true`,
        D02_A: `Given a binary tree, find its maximum depth.
        The maximum depth is the number of nodes along the longest path
        from the root node down to the farthest leaf node.
        Note: A leaf is a node with no children.`,
        D03_A: `Find inorder, preorder traversal of tree using recursive and iterative approach.
        Step 1: Create a BST.
        Step 2: Insert some elements. let say five values.
        Step 3: Perform inorder recursively
        Step 4: Perform inorder iteratively
        Step 5: Perform preorder recursively
        Step 6: Perform preorder iteratively`,
        D04_A: `Given a binary tree, imagine yourself standing on the right side of it,
        return the values of the nodes you can see ordered from top to bottom.'
        https://leetcode.com/problems/binary-tree-right-side-view/
        Note: You can take BST and add random number to BST and perform right side view.`
    },
    W20: {
        D01_A: `Create a hash table
        Implement below function
        set item
        get item
        delete item`,
        D02_A: `Implement heap using min heap`,
        D03_A: `Implement priority queue using heap`,
        D04_A: `Implement graph using adjacent list`,
        D05_A: `Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
        An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
        You may assume all four edges of the grid are all surrounded by water.
        
        Example 1:
        
        Input:
        
        11110
        
        11010
        
        11000
        
        00000
        
        Output: 1
        
        Example 2:
        
        Input:
        
        11000
        
        11000
        
        00100
        
        00011
        
        Output: 3`
    },
    W22: {
        D03_A: `1. Create an application which takes user name, email and city
        2. User name and email fields should be in one component
        3. User city should be in another component
        4. Both the above components are wrapped inside another component 
            whose state the above two components will change upon typing
        5. The wrapper component holding both the name-email fields component 
            and the city field component should have a submit button
        6. On click of submit, the data should go to the App Component 
            and get added to the list of users
        7. The list of users should be sent to the component showing list of users
        8. They have to maintain a list of Unique user cities in the App component, 
            which will be sent to another "cities" component
        9. Upon addition of a user, the user city, if not already present inside 
            the list of unique cities, should be pushed inside that list`,
        D04_A: `# Shopping Cart Assignment
        1. Create a static (with static data) web app using React.
        2. Add a static header section
        3. The app will contain 2 vertical sections (columns).
        4. The left column will have a list of items with:
           1. item name
           2. cost
           3. Add to cart button
        5. The right column will contain the dynamic cart which will contain 
            the list of added items and the total cost of all cart items.
        6. In the right column, against every item, there should be 
            a button to remove the item from cart.
        9. Both left(item-list) and right(cart) sections should be 
            individually scrollable if the list of items in either exceeds the viewport.
        10. A checkout button at the bottom of the cart which should clear the cart.`,
        D05_A: `The classic To-Do application where a user can write down all the things 
        he wants to accomplish.
        User Stories -
        1. User can see an input field where he can type in a to-do item, along with 
            a deadline for the to-do.
        2. By pressing enter (or a button), the User can submit the to-do item 
            and can see that being added to a list of to-do’s
        3. User can mark a to-do as completed
        4. User can remove a to-do item by pressing on a button (or on the to-do item itself)
        5. User can edit a to-do
        6. There should be a dropdown next to the input with three options, "ALL", "COMPLETED", "ACTIVE"
            User can see a list with all the completed to-do’s.
            User can see a list with all the active to-do’s
            User can see a list with all the to-do’s
            User can see the date when he created the to-do
        7. The completed to-do's should be displayed in green color, the active ones in red colour.
        
        Read About -
        1. What is Redux? What is it used for?
        2. Is redux related to react, or is it independent? With which all other 
            frameworks can we use redux?
        3. How does redux work? How does it connect with or work with react?
        4. What are pure functions? What is a reducer?
        5. What are actions?
        https://egghead.io/courses/getting-started-with-redux
        
        Read About react some more, get your basics strengthened through this 
        https://egghead.io/courses/the-beginner-s-guide-to-react
        
        P.S - Both courses are free and open to everyone`
    },
	W23: {
		D04_A: `Create an application -
		
		Home page route "/"
		Three Links in the header
		Users
		Products
		Orders

		Users link click - route - "/users"
		List of users
		Click on user - route - "users/:username"

		Users link click - route - "/products"
		List of products
		Click on product - route - "products/:productname"

		Users link click - route - "/orders"
		List of orders
		Click on order - route - "orders/:orderID"

		TO READ -
		react-router browser router
		route
		link

		Resources links -
		https://reacttraining.com/react-router/web/guides/quick-start`
	}
}

console.log(data.W22.D03_A);