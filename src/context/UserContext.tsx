
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Order {
  id: number;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  items: any[];
  total: number;
}

interface UserContextType {
  user: User | null;
  orders: Order[];
  login: (user: User) => void;
  logout: () => void;
  addOrder: (order: Omit<Order, 'id'>) => void;
  cancelOrder: (orderId: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setOrders([]);
  };

  const addOrder = (orderData: Omit<Order, 'id'>) => {
    const newOrder = {
      ...orderData,
      id: Date.now()
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  const cancelOrder = (orderId: number) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: 'cancelled' as const } : order
      )
    );
  };

  return (
    <UserContext.Provider value={{
      user,
      orders,
      login,
      logout,
      addOrder,
      cancelOrder
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
