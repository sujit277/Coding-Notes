/* Java Program to Insert an Node at Certain Postion in the linkedlist */

public class Insertcrtlinkedlist
{
private Listnode head;
private static class Listnode
{
private int data;
private Listnode next;
public Listnode(int data)
{
this.data = data;
this.next = null;
}
}
public void display()
{
Listnode current = head;
while(current!=null)
{
System.out.print(current.data+"-->");
current = current.next;
}
System.out.println("null");
}
public void instcrt(int data,int pos)
{
Listnode ptr = head;
Listnode ptr2 = new Listnode(data);
pos--;
while(pos!=1)
{
ptr = ptr.next;
pos--;
}
ptr2.next = ptr.next;
ptr.next = ptr2;
}
public static void main(String args[])
{
Insertcrtlinkedlist inst = new Insertcrtlinkedlist();
inst.head = new Listnode(2);
Listnode first = new Listnode(3);
Listnode second = new Listnode(4);
Listnode third = new Listnode(7);
inst.head.next = first;
first.next = second;
second.next = third;
inst.display();
inst.instcrt(30,3);
inst.display();
}
}