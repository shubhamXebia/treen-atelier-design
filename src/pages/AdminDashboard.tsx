
import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const mockOrders = [
    { id: 1, customer: 'John Doe', product: 'Oak Dining Table', amount: 1299, status: 'completed' },
    { id: 2, customer: 'Jane Smith', product: 'Walnut Chair', amount: 459, status: 'pending' },
    { id: 3, customer: 'Bob Johnson', product: 'Kitchen Set', amount: 189, status: 'shipped' }
  ];

  const mockProducts = [
    { id: 1, name: 'Premium Oak Dining Table', price: 1299, stock: 5, category: 'furniture' },
    { id: 2, name: 'Handcrafted Walnut Chair', price: 459, stock: 12, category: 'furniture' },
    { id: 3, name: 'Bamboo Kitchen Set', price: 189, stock: 8, category: 'kitchenware' }
  ];

  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: 3, joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 1, joined: '2024-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', orders: 2, joined: '2024-03-10' }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-playfair font-bold text-treen-900">Admin Dashboard</h1>
          <p className="text-treen-600">Manage your Treen store</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Total Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-treen-900">156</p>
                  <p className="text-sm text-treen-600">+12% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-treen-900">$24,580</p>
                  <p className="text-sm text-treen-600">+8% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-treen-900">89</p>
                  <p className="text-sm text-treen-600">+15% from last month</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-playfair font-semibold">Orders Management</h2>
              <Button className="bg-treen-800 hover:bg-treen-900">Add New Order</Button>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-treen-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-treen-200">
                      {mockOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 text-sm text-treen-900">#{order.id}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">{order.customer}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">{order.product}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">${order.amount}</td>
                          <td className="px-6 py-4">
                            <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                              {order.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-playfair font-semibold">Products Management</h2>
              <Button className="bg-treen-800 hover:bg-treen-900">Add New Product</Button>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-treen-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-treen-200">
                      {mockProducts.map((product) => (
                        <tr key={product.id}>
                          <td className="px-6 py-4 text-sm text-treen-900">#{product.id}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">{product.name}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">${product.price}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">{product.stock}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">{product.category}</td>
                          <td className="px-6 py-4 text-sm space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Delete</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-playfair font-semibold">Users Management</h2>
              <div className="flex gap-2">
                <Input placeholder="Search users..." className="w-64" />
                <Button className="bg-treen-800 hover:bg-treen-900">Search</Button>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-treen-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Orders</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Joined</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-treen-700 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-treen-200">
                      {mockUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 text-sm text-treen-900">#{user.id}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">{user.name}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">{user.email}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">{user.orders}</td>
                          <td className="px-6 py-4 text-sm text-treen-900">{user.joined}</td>
                          <td className="px-6 py-4 text-sm space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Edit</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
